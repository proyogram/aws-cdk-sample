#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TsStack001 } from '../lib/stack_001/ts-stack-001';
import { TsStack002 } from '../lib/stack_002/ts-stack-002';

const app = new cdk.App();

const test = new TsStack001(app, 'TsStack001', {});
new TsStack002(app, 'TsStack002', test.varTest);