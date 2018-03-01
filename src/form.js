import React from 'react';

export default function SongForm({ onSubmit }){
    return (
      <form className="song-form" onSubmit={onSubmit}>
        <label htmlFor="difficulty">Difficulty: </label>
          <select name="selectDifficulty">
            <option value="Intermediates">Intermediate</option>
            <option value="Advanceds">Advanced</option>
          </select>
        <label htmlFor="artist">Artist: </label>
        <input type="text" name="artist" id="artist" placeholder="Enter an artist" />
        <label htmlFor="song">Song: </label>
        <input type="text" name="song" id="song" placeholder="Enter a song name" />
        <label htmlFor="technique">Techniques Used: </label>
        <textarea name="technique" rows="3" cols="20" id="technique" placeholder="What techniques are used?"></textarea>
        <label htmlFor="url">Add a link: </label>
        <input type="text" name="url" id="url" placeholder="www.youtube.com/song" />
        <input type="submit" name="submit" value="Submit" />
      </form>
    );
}
