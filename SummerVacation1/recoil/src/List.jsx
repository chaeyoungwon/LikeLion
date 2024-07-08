import { atoms } from "./recoil/atoms/atom";
import { useRecoilState } from "recoil";

const List = () => {
  const [list, setList] = useRecoilState(atoms);
};

export default List;
