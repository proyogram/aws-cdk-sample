import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

interface ITsConstruct002props extends cdk.StackProps{
  duration_seconds:number
}

export class TsConstruct002 extends Construct {
  constructor(scope: Construct, id: string, props: ITsConstruct002props) {
    super(scope, id);
    // example resource
    const queue = new sqs.Queue(this, 'TsQueu002', {
      visibilityTimeout: cdk.Duration.seconds(props.duration_seconds)
    });
  }
}