exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const hasApiKey = !!process.env.RESEND_API_KEY;
  const hasToEmail = !!process.env.TO_EMAIL;

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ 
      configured: hasApiKey && hasToEmail,
      resend_api_configured: hasApiKey,
      to_email_configured: hasToEmail,
      message: hasApiKey && hasToEmail 
        ? 'Email service is properly configured' 
        : 'Email service configuration incomplete'
    }),
  };
};
