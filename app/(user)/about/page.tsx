import Image from "next/image"

export default function AboutPage() {
    return (
        <main>
            <div className="m-[auto] mt-[2rem] mb-[2rem] w-[80%]">
                <h1 className="font-bold text-[var(--text-purple)] text-4xl mb-3 text-center">
                    About Us
                </h1>

                <section className="py-8 rounded-xl shadow-lg bg-[var(--bg-light)]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
                            <p className="text-lg text-gray-600 mt-4 mx-auto">At Myus Enterprises, we believe in the power of fashion to express your individuality. We are a passionate team of designers, stylists, and visionaries who work tirelessly to create stylish, sustainable, and comfortable clothing for every occasion. Whether you're looking for everyday wear or something special, we've got you covered.</p>
                        </div>

                        <div className="flex justify-center mb-12">
                            <Image
                                src={"/assets/images/About_image.webp"}
                                alt="Sign-in"
                                width={0}
                                height={0}
                                sizes="100%"
                                className="w-full rounded-lg shadow-lg" />
                        </div>

                        <div className="text-center">
                            <p className="text-lg text-gray-600 mb-4 mx-auto">Founded in 2019, our goal has always been to provide high-quality fashion that doesn't break the bank. From the very beginning, we’ve been committed to using eco-friendly materials, promoting fair labor practices, and offering a variety of styles to cater to everyone’s unique taste.</p>

                            <p className="text-lg text-gray-600 mb-4 mx-auto">We believe that fashion should be accessible, inclusive, and fun, and we aim to make our customers feel confident, stylish, and proud of the clothes they wear.</p>

                            <h3 className="text-2xl font-semibold text-gray-800 mt-8">Our Mission</h3>
                            <p className="text-lg text-gray-600 mt-4 mx-auto">To inspire confidence in our customers by offering high-quality, sustainable, and affordable fashion that fits every lifestyle. We are committed to creating a world where fashion is not just about what you wear, but how you wear it.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
