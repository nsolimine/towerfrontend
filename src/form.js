import React from 'react';

export default function SongForm({ onSubmit }){
    return (
      <form className="song-form" onSubmit={onSubmit}>
          <label htmlFor="difficulty">Difficulty: </label>
          <input type="text" name="difficulty" />
          <label htmlFor="artist">Artist: </label>
          <input type="text" name="artist" />
          <label htmlFor="song">Song: </label>
          <input type="text" name="song" />
          <label htmlFor="technique">Techniques Used: </label>
          <textarea name="technique" rows="8" cols="40"></textarea>
          <input type="submit" name="submit" value="Submit" />
        </form>
    );
}
