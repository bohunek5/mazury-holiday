import { ApartmentsEditor } from "./ApartmentsEditor";
import { strandaApartments } from "@/data/stranda-apartments";
import { fuledaApartments } from "@/data/fuleda-data";
import { kisajnoData } from "@/data/kisajno-data";

export default function AdminApartamentyPage() {
    return (
        <ApartmentsEditor
            initialStranda={strandaApartments}
            initialFuleda={fuledaApartments}
            initialKisajno={kisajnoData}
        />
    );
}
