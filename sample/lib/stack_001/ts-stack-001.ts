import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { TsConstruct001 } from './constructs-001/constructs-001';


export class TsStack001 extends cdk.Stack {
  public varTest : number
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const props_test = {
      duration_seconds:300
    }

    const sqs = new TsConstruct001(this, 'TsQueue', props_test)

    this.varTest = props_test.duration_seconds
  }
}
