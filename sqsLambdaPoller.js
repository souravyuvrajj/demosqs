console.log('Loading function');

exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    return `Successfully processed ${event.Records.length} messages.`;
};
