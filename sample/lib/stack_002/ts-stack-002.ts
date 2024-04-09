import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { TsConstruct002 } from './constructs-002/constructs-002';

export class TsStack002 extends cdk.Stack {
  constructor(scope: Construct, id: string, varTest: number) {
    super(scope, id);

    const props_test = {
      duration_seconds:varTest
    }

    const sqs = new TsConstruct002(this, 'TsQueue', props_test)
  }
}
