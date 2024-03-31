import React from 'react'

const About = () => {
    return (
        <div className="w-full p-6">
            <div className="max-w-screen-xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">About :SW MERN App</h1>

                <h2 className="text-xl font-bold mb-2">Table of Contents</h2>

                <ul className="list-disc pl-4 mb-6">
                    <li><a href="#overview" className="text-blue-500 hover:underline">Overview</a></li>
                    <li><a href="#documentation" className="text-blue-500 hover:underline">Documentation</a></li>
                    <li><a href="#todo" className="text-blue-500 hover:underline">ToDo</a></li>
                </ul>

                <h2 id="overview" className="text-xl font-bold mb-2">Overview</h2>
                <p className="mb-6">
                    This is a simple MERN (MongoDB, Express.js, React, Node.js) application for managing records. It provides basic CRUD
                    (Create, Read, Update, Delete) operations for a collection of records stored in a MongoDB database. The client-side of
                    the application is built using React with Vite as the build tool and Tailwind CSS for styling.
                </p>

                <h2 className="text-xl font-bold mb-2">Setup</h2>
                <ol className="list-decimal pl-6 mb-6">
                    <li>
                        <strong>Clone the Repository:</strong>
                        <pre><code className="bg-gray-200 p-2 inline-block rounded">git clone https://github.com/gauravrjoshi/mern-crud.git</code></pre>
                    </li>
                    <li>
                        <strong>Install Dependencies:</strong>
                        <ul className="list-disc pl-4">
                            <li>Navigate to the project directory:</li>
                            <pre><code className="bg-gray-200 p-2 inline-block rounded">cd &lt;project-directory&gt;</code></pre>
                            <li>Install server-side dependencies:</li>
                            <pre><code className="bg-gray-200 p-2 inline-block rounded">npm install</code></pre>
                            <li>Navigate to the client directory:</li>
                            <pre><code className="bg-gray-200 p-2 inline-block rounded">cd client</code></pre>
                            <li>Install client-side dependencies:</li>
                            <pre><code className="bg-gray-200 p-2 inline-block rounded">npm install</code></pre>
                        </ul>
                    </li>
                    <li>
                        <strong>Configure Database:</strong>
                        <ul className="list-disc pl-4">
                            <li>Ensure MongoDB is installed and running locally.</li>
                            <li>Update the database connection details in <code className="bg-gray-200 p-2 inline-block rounded">../db/connection.js</code> if necessary.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Run the Application:</strong>
                        <ul className="list-disc pl-4">
                            <li>Start the server:</li>
                            <pre><code className="bg-gray-200 p-2 inline-block rounded">npm start</code></pre>
                            <li>Start the client (in a separate terminal):</li>
                            <pre><code className="bg-gray-200 p-2 inline-block rounded">npm run dev</code></pre>
                        </ul>
                    </li>
                    <li>
                        <strong>Access the Application:</strong>
                        <ul className="list-disc pl-4">
                            <li>Open your web browser and navigate to <code className="bg-gray-200 p-2 inline-block rounded">http://localhost:3000</code> to access the application.</li>
                        </ul>
                    </li>
                </ol>

                <h2 id="documentation" className="text-xl font-bold mb-2">Documentation</h2>
                <p className="mb-6">
                    For more detailed documentation, please refer to the following resources:
                    <ul className="list-disc pl-4">
                        <li><a href="https://docs.google.com/document/d/1fOS9ykJq5JkBTggqGvQehEprqKj2l9jeiW8U49dExWA/edit?usp=sharing" className="text-blue-500 hover:underline">Google Docs</a></li>
                    </ul>
                </p>

                <h2 id="todo" className="text-xl font-bold mb-2">ToDo</h2>
                <ul className="list-disc pl-4 mb-6">
                    <li>The frontend basic setup done</li>
                    <li><a href="https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/" className="text-blue-500 hover:underline">How to Secure Your MERN Stack App with JWT-Based User Authentication and Authorization</a></li>
                    <li>A single-page MERN app that uses mui react-data-grid + remote MongoDB database displays data table from the MongoDB data source and does server-side filtering based on the filters set by the user on the front-end</li>
                </ul>
            </div>

        </div>
    )
}

export default About