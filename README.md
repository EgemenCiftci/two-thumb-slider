# Two Thumb Slider

| **Name** | **Type** | **Description**                                 |
| -------- | -------- | ----------------------------------------------- |
| min      | number   | Specifies the minimum value allowed             |
| max      | number   | Specifies the maximum value allowed             |
| step     | number   | Specifies the legal number intervals            |
| value0   | number   | Specifies the default value of the left button  |
| value1   | number   | Specifies the default value of the right button |

**Event:**
change: EventEmitter<{ value0: number; value1: number }>

**Methods:**
value0StepDown()
value0StepUp()
value1StepDown()
value1StepUp()

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/two-thumb-slider)
