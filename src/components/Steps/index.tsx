import React from 'react';
import { Steps as AntdSteps } from 'antd';
import { StepsProps as AntdStepsProps, StepProps as AntdStepProps } from 'antd/lib/steps';
import './index.less';
import classNames from 'classnames';

// steps子组件
export interface StepProps extends AntdStepProps {}

const Step = (props: StepProps) => {
  let icon;
  if (props.status === 'finish') {
    icon = (
      <span className={'lidig-step-finishIcon'} style={{ height: 24, width: 24 }}>
        {/* <LegacyIcon type={'pm-gou'} style={{ fontSize: 14 }} /> */}
      </span>
    );
  }
  return (
    <AntdSteps.Step
      {...props}
      className={classNames(
        'lidig-step-step',
        props.status === 'finish' ? 'lidig-step-finishStep' : '',
      )}
      icon={icon}
    />
  );
};

// steps 组件本身
export interface StepsProps extends AntdStepsProps {}

const Steps = (props: StepsProps) => {
  const { className } = props;
  return <AntdSteps {...props} className={classNames('lidig-step-steps', className)} />;
};
Steps.Step = Step;

export default Steps;
