import { FaFilter } from "react-icons/fa";

const races = [
    "Human", "Saiyan", "Namekian", "Majin", "Frieza Race", "Android",
    "Jiren Race", "God", "Angel", "Evil", "Nucleico", "Nucleico benigno", "Unknown"
];

const genders = ["Male", "Female", "Unknown"];

const affiliations = [
    "Z Fighter", "Red Ribbon Army", "Namekian Warrior", "Freelancer",
    "Army of Frieza", "Pride Troopers", "Assistant of Vermoud",
    "God Assistant of Beerus", "Villain", "Other"
];

export function Filters({ name, setName, race, setRace, gender, setGender, affiliation, setAffiliation, applyFilter, limit, setLimit }) {
    return (
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre"
                    className="border p-2 rounded"
                />

                <select
                    value={race}
                    onChange={(e) => setRace(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="">Todas las Razas</option>
                    {races.map((r) => (
                        <option key={r} value={r}>{r}</option>
                    ))}
                </select>

                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="">Todos los Géneros</option>
                    {genders.map((g) => (
                        <option key={g} value={g}>{g}</option>
                    ))}
                </select>

                <select
                    value={affiliation}
                    onChange={(e) => setAffiliation(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="">Todas las Afiliaciones</option>
                    {affiliations.map((a) => (
                        <option key={a} value={a}>{a}</option>
                    ))}
                </select>

                <button
                    onClick={applyFilter}
                    className="bg-blue-600 text-white p-2 rounded flex items-center gap-2"
                >
                    <FaFilter /> Aplicar Filtros
                </button>
            </div>

            <div>
                <label className="mr-2 font-bold">Personajes por página:</label>
                <select
                    value={limit}
                    onChange={(e) => setLimit(Number(e.target.value))}
                    className="border rounded p-1"
                >
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                    <option value={16}>16</option>
                    <option value={24}>24</option>
                </select>
            </div>
        </div>
    );
}
