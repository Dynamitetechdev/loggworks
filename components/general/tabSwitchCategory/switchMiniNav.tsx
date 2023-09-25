const SwitchMiniNav: React.FC<{
  switchOptions: any;
  activeSwitchIndex: number;
  handleSelectSwitch: any;
}> = ({ switchOptions, activeSwitchIndex, handleSelectSwitch }) => {
  return (
    <div className="max-sm:text-[16px]">
      <ul className="flex items-center text-center justify-between px-3 rounded border-b border-grey cursor-pointer">
        {switchOptions.map((x: any, i: number) => (
          <li
            className={` py-3 capitalize md:px-[30px] ${
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
