import supabase, { supabaseUrl } from "./supaBase";

export async function getCabins() {
  let { data: Cabin, error } = await supabase.from("Cabin").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return Cabin;
}

export async function deleteCabins(id) {
  const { error } = await supabase.from("Cabin").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabin could not be deleted");
  }
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("Cabin");
  //1. create cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("cabin could not be created");
  }

  //2. upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("Cabin").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}
