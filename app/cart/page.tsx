import Cats from "@/components/CatBox";

export default function Cart() {
    return (
        <main className="flex min-h-screen flex-col items-center p-16">
            <h3 className="text-xl font-bold underline"> Cat Store</h3>
            <Cats/>
        </main>
    )
}
