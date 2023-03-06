# Two Thumb Slider

## Parameters:

| **Name** | **Type** | **Default** | **Description**                        |
| -------- | -------- | ----------- | -------------------------------------- |
| min      | number   | 0           | Specifies the minimum value allowed    |
| max      | number   | 100         | Specifies the maximum value allowed    |
| step     | number   | 1           | Specifies the legal number intervals   |
| value0   | number   | 33          | Specifies the value of the left thumb  |
| value1   | number   | 67          | Specifies the value of the right thumb |

## Event:

| **Name** | **Type**                                         | **Description**                                     |
| -------- | ------------------------------------------------ | --------------------------------------------------- |
| change   | EventEmitter<{ value0: number; value1: number }> | Triggers on left thumb or right thumb value changes |

## Methods:

| **Name**       | **Description**                          |
| -------------- | ---------------------------------------- |
| value0StepDown | Decrements left thumb value by one step  |
| value0StepUp   | Increments left thumb value by one step  |
| value1StepDown | Decrements right thumb value by one step |
| value1StepUp   | Increments right thumb value by one step |

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/two-thumb-slider)
