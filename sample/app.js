const appName = ProcessingInstruction.env.APP_NAME || 'Unknown';
const environment = ProcessingInstruction.env.ENVIRONMENT || 'Unknown';

console.log(`Running ${appName} in ${ENVIRONMENT} environment.`);
