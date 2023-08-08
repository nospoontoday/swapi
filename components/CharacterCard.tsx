import React from 'react';

interface Character {
  name: string;
  birth_year: string;
  eye_color: string;
}

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <div className="py-5 px-4 flex justify-between border-l-4 border-transparent bg-transparent hover:border-red-500 hover:bg-red-50">
        <div className="sm:pl-4 pr-8 flex sm:items-center">
            <div className="space-y-1">
                <p className="text-base text-gray-700 font-bold t racking-wide">{character.name}</p>
                <p className="text-sm text-gray-500 font-medium">Birth Year: {character.birth_year}</p>
                <p className="text-sm text-gray-500 font-medium">Eye Color: {character.eye_color}</p>
            </div>
        </div>
    </div>
  );
};

export default CharacterCard;
