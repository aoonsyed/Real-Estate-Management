import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const SellerDashboard = () => {
    return (
        <>

            <Header />
            
            <div
                className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 my-8 rounded-lg"
                id='divi'
                style={{
                    backgroundColor: 'rgb(75 85 99)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '28px'
                }}
            ><div class="overflow-x-auto rounded-xl">
                    <div class="text-center">
                        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <thead class="ltr:text-left rtl:text-right">
                                <tr>
                                    <th class="whitespace-nowrap px-8 py-2 font-medium text-gray-900">
                                        Name
                                    </th>
                                    <th class="whitespace-nowrap px-8 py-2 font-medium text-gray-900">
                                        Date of Birth
                                    </th>
                                    <th class="whitespace-nowrap px-8 py-2 font-medium text-gray-900">
                                        Role
                                    </th>
                                    <th class="whitespace-nowrap px-8 py-2 font-medium text-gray-900">
                                        Salary
                                    </th>
                                    <th class="px-4 py-2"></th>
                                </tr>
                            </thead>

                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        John Doe
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                                    <td class="whitespace-nowrap px-4 py-2">
                                        <a
                                            href="#"
                                            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Edit
                                        </a>
                                        <a
                                            href="#"
                                            class="inline-block rounded bg-red-700 px-4 py-2 ms-2 text-xs font-medium text-white hover:bg-red-500"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Jane Doe
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
                                    <td class="whitespace-nowrap px-4 py-2">
                                        <a
                                            href="#"
                                            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Edit
                                        </a>
                                        <a
                                            href="#"
                                            class="inline-block rounded bg-red-700 px-4 py-2 ms-2 text-xs font-medium text-white hover:bg-red-500"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Jane Doe
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
                                    <td class="whitespace-nowrap px-4 py-2">
                                        <a
                                            href="#"
                                            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Edit
                                        </a>
                                        <a
                                            href="#"
                                            class="inline-block rounded bg-red-700 px-4 py-2 ms-2 text-xs font-medium text-white hover:bg-red-500"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Jane Doe
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
                                    <td class="whitespace-nowrap px-4 py-2">
                                        <a
                                            href="#"
                                            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Edit
                                        </a>
                                        <a
                                            href="#"
                                            class="inline-block rounded bg-red-700 px-4 py-2 ms-2 text-xs font-medium text-white hover:bg-red-500"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Gary Barlow
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
                                    <td class="whitespace-nowrap px-4 py-2">
                                        <a
                                            href="#"
                                            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Edit
                                        </a>
                                        <a
                                            href="#"
                                            class="inline-block rounded bg-red-700 px-4 py-2 ms-2 text-xs font-medium text-white hover:bg-red-500"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SellerDashboard
