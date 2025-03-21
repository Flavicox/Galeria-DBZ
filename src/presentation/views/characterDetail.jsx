import {useParams} from "react-router";
import {useGetCharactersByIdQuery} from "../../api/dbzApi";

export function CharacterDetail() {
    const {id} = useParams();
    const { data:character, isLoading, error } = useGetCharactersByIdQuery(id);

    if (isLoading) return <p>Cargando detalles...</p>;
    if (error || !character) return <p>Error al cargar el personaje.</p>;

    return (
        <div className="max-w-7xl mx-auto p-8">
            {/* Botón de volver */}
            <button
                onClick={() => window.history.back()}
                className="mb-4 p-2 bg-blue-600 text-white rounded-lg"
            >
                Volver
            </button>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Imagen a la izquierda con tamaño máximo */}
                <div className="w-full md:w-1/2 flex items-center justify-center rounded-lg overflow-hidden">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="max-h-[600px] w-auto object-contain"
                    />
                </div>

                {/* Información a la derecha */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{character.name}</h1>
                    <p className="text-lg mb-4"><strong>Raza:</strong> {character.race}</p>
                    <p className="text-lg mb-4"><strong>Género:</strong> {character.gender}</p>
                    <p className="text-lg mb-4"><strong>Ki:</strong> {character.ki}</p>
                    <p className="text-lg mb-4"><strong>Máximo Ki:</strong> {character.maxKi}</p>
                    <p className="text-lg mb-4"><strong>Afiliación:</strong> {character.affiliation}</p>
                    <p className="text-lg text-justify"><strong>Descripción:</strong> {character.description}</p>
                </div>
            </div>
        </div>
    );
}