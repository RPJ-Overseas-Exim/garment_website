import { FaLocationDot, FaRegEnvelope } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

export default function ContactUs() {
    return (
        <section className="min-h-screen py-12 px-4 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full p-8 md:p-12 grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="text-gray-600">We’d love to hear from you! Feel free to reach out using any of the methods below.</p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <FaLocationDot size={24} />
                            <div>
                                <h4 className="font-semibold">Address</h4>
                                <p>Myus Enterprises, Bhiwandi<br />Thane, Maharashtra, India</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <IoCall size={24} />
                            <div>
                                <h4 className="font-semibold">Phone</h4>
                                <p>{`+1 (882) 821-4944`}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaRegEnvelope size={24} />
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p>{`myusenterprises@gmail.com`}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                        <input type="text" name="name" id="name" required
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input type="email" name="email" id="email" required
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2" />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                        <input type="text" name="subject" id="subject"
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium">Message</label>
                        <textarea name="message" id="message" rows={4} required
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"></textarea>
                    </div>

                    <div className="text-right">
                        <button type="submit"
                            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
