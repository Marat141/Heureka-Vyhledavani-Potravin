import { json } from '@sveltejs/kit';

export async function GET({ locals }) {
    if (!locals.user) {
        return json({ error: 'Nejste přihlášen' }, { status: 401 });
    }

    return json({ message: 'Vítejte v profilu!', user: locals.user });
}
