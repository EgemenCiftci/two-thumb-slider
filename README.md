# Two Thumb Slider

## Parameters:

| **Name** | **Type** | **Default** | **Description**                         |
| -------- | -------- | ----------- | --------------------------------------- |
| min      | number   | 0           | Specifies the minimum value allowed     |
| max      | number   | 100         | Specifies the maximum value allowed     |
| step     | number   | 1           | Specifies the legal number intervals    |
| value0   | number   | 33          | Specifies the value of the left button  |
| value1   | number   | 67          | Specifies the value of the right button |

## Event:

| **Name** | **Type**                                         | **Description**           |
| -------- | ------------------------------------------------ | ------------------------- |
| change   | EventEmitter<{ value0: number; value1: number }> | Triggers on left button or right button value changes |

## Methods:

| **Name**       | **Description**                           |
| -------------- | ----------------------------------------- |
| value0StepDown | Decrements left button value by one step  |
| value0StepUp   | Increments left button value by one step  |
| value1StepDown | Decrements right button value by one step |
| value1StepUp   | Increments right button value by one step |

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/two-thumb-slider)
