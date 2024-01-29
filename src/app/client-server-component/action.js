import { MongoClient } from 'mongodb';

const { DATABASE_URI, COLLECTION_NAME } = process.env;

export async function submitForm(formData) {
    const id = formData.get('id');
    const name = formData.get('name');
    const address = formData.get('address');
    const city = formData.get('city');
    const country = formData.get('country');

    try {
        const client = await MongoClient.connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db();

        await db.collection(COLLECTION_NAME).insertOne({
            id,
            name,
            address,
            city,
            country
        });

        console.log('Form submitted successfully');
    } catch (error) {
        console.error('Error submitting form:', error.message);
    } finally {
        // Close the database connection
        client && client.close();
    }
}
