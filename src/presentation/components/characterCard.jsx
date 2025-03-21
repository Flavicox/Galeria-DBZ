import {Link} from "react-router";

export function CharacterCard({ character }) {
    return (
        <Link to={`/character/${character.id}`} key={character.id}>
            <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                <div className="w-full h-80 flex items-center justify-center overflow-hidden rounded-lg">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="max-h-full w-auto object-contain"
                    />
                </div>
                <h2 className="text-2xl font-semibold mt-4">{character.name}</h2>
                <p><strong>Raza:</strong> {character.race}</p>
                <p><strong>Género:</strong> {character.gender}</p>
                <p><strong>Ki:</strong> {character.ki}</p>
            </div>
        </Link>
    );
}