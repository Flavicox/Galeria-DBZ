import { useLazyGetCharactersQuery} from "../../api/dbzApi";
import {CharacterCard} from "../components/characterCard";
import {useEffect, useState} from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {Filters} from "../components/filters";

export function CharacterList() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(8);

    // Estados de los filtros
    const [name, setName] = useState("");
    const [race, setRace] = useState("");
    const [gender, setGender] = useState("");
    const [affiliation, setAffiliation] = useState("");

    // Ejecutar la consulta manualmente
    const [trigger, { data, isLoading, error }] = useLazyGetCharactersQuery();

    const applyFilter = () => {
        const params = new URLSearchParams();
        if (name) params.append("name", name);
        if (race) params.append("race", race);
        if (gender) params.append("gender", gender);
        if (affiliation) params.append("affiliation", affiliation);

        if (!name && !race && !gender && !affiliation) {
            params.append("page", page);
            params.append("limit", limit);
        }

        trigger(`?${params.toString()}`);
        setPage(1); // Reinicia a la página 1 al aplicar los filtros
    };

    useEffect(() => {
        if (!name && !race && !gender && !affiliation) {
            trigger(`?page=${page}&limit=${limit}`);
        }
    }, [page, limit, name, race, gender, affiliation, trigger]);

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los personajes</p>;

    const characters = data?.items || data || [];

    const totalPages = name || race || gender || affiliation ? 1 : data?.meta?.totalPages || 1;

    return (
        <div className="max-w-7xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Galería de Personajes de DBZ</h1>

            <Filters
                name={name}
                setName={setName}
                race={race}
                setRace={setRace}
                gender={gender}
                setGender={setGender}
                affiliation={affiliation}
                setAffiliation={setAffiliation}
                applyFilter={applyFilter}
                limit={limit}
                setLimit={setLimit}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>

            <div className="flex justify-center mt-6 gap-2">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className={`px-3 py-2 border rounded ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                >
                    <IoIosArrowBack />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                        key={p}
                        onClick={() => setPage(p)}
                        disabled={p === page}
                        className={`px-3 py-2 border rounded ${p === page ? "bg-gray-400 text-white cursor-not-allowed" : "hover:bg-gray-200"}`}
                    >
                        {p}
                    </button>
                ))}

                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                    className={`px-3 py-2 border rounded ${page === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
}
