import { generateToken } from '../utils/jwt';

async function main() {
  try {
    // Exemple de payload pour les tests
    const payload = {
      userId: '123',
      role: 'admin'
    };

    const token = await generateToken(payload);
    console.log('Test Token:', token);
    
    // Exemple d'utilisation dans un header Authorization
    console.log('\nUtilisation dans un header:');
    console.log('Authorization: Bearer', token);
  } catch (error) {
    console.error('Error generating token:', error);
  }
}

main();