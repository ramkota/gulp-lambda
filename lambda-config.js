module.exports = {
  region: 'us-east-1',
  handler: 'index.handler',
  functionName: 'test',
  timeout: 10,
  memorySize: 128,
  publish: true, // default: false,
  runtime: 'nodejs4.3', // default: 'nodejs4.3',
  vpc: { // optional
    SecurityGroupIds: [],
    SubnetIds: []
  }
}
