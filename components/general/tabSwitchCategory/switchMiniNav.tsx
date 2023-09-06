const SwitchMiniNav: React.FC<{
  switchOptions: any;
  activeSwitchIndex: number;
  handleSelectSwitch: any;
}> = ({ switchOptions, activeSwitchIndex, handleSelectSwitch }) => {
  return (
    <div className="">
      <ul className="flex items-center text-center px-1 rounded border-b border-grey cursor-pointer">
        {switchOptions.map((x: any, i: number) => (
          <li
            className={`w-1/2  py-3 capitalize  ${
              activeSwitchIndex === i &&
              "border-b-2 border-green text-green font-bold"
            } `}
            key={i}
            onClick={() => handleSelectSwitch(i, x)}
          >
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SwitchMiniNav;
