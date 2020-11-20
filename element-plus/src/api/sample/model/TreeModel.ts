export default interface TreeModel {
  children: TreeModel[];
  icon: string;
  isLeaf: boolean;
  key: number;
  label: string;
  parentId: number;
  scopedSlots: object;
  slotTitle: string;
  title: string;
  type: number;
  value: number;
}
