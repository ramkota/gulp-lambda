module.exports = {
  accessKeyId: '',  // optional
  secretAccessKey: '',  // optional
  sessionToken: '',  // optional
  profile: '', // optional for loading AWS credientail from custom profile
  region: 'us-east-1',
  handler: 'index.handler',
  role: '',
  functionName: '<function name>',
  timeout: 10,
  memorySize: 128,
  publish: true, // default: false,
  runtime: 'nodejs4.3', // default: 'nodejs4.3',
  vpc: { // optional
    SecurityGroupIds: [],
    SubnetIds: []
  },
  eventSource: {
    EventSourceArn: '<event source such as kinesis ARN>',
    BatchSize: 200,
    StartingPosition: "TRIM_HORIZON"
  }
}