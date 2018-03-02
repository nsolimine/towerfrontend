import React from "react";

export default function UpdateForm({ onUpdate, updateObj }){
  return (
    <form className="update-form" onSubmit={onUpdate}>
      <label htmlFor="id">Level: </label>
      <input type="text" id="id" name="id" value = {updateObj.id} />
      <label htmlFor="difficulty">Difficulty: </label>
      <input type="text" name="difficulty" id="difficulty" value = {updateObj.difficulty && updateObj.difficulty.replace(/s$/,"")} />
      <label htmlFor="artist">Update the artist: </label>
      <input type="text" name="artist" id="artist" placeholder="Update the artist" />
      <label htmlFor="song">Update the song: </label>
      <input type="text" name="song" id="song" placeholder="Update the song" />
      <label htmlFor="technique">Update the techniques used: </label>
      <textarea name="technique" rows="3" cols="20" id="technique" placeholder="Update the techniques used"></textarea>
      <label htmlFor="url">Update the link: </label>
      <input type="text" name="url" id="url" placeholder="Update the link" />
      <input type="submit" name="update" value="Submit" />
    </form>
  );
}
