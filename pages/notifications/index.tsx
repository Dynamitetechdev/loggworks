import Image from "next/image";
import SideBar from "../../components/general/sideBar";
import Header from "../../components/general/nav/header";
import NavHead from "../../components/postJobComponents/navHead";
import { useState } from "react";
import Switch, { switchClasses } from "@mui/joy/Switch";
import { Theme } from "@mui/joy";

const Notifications = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="md:flex">
      <div className="w-[221px]">
        <SideBar />
      </div>
      <div className="flex-grow">
        <div className="post-job bg-white h-screen relative">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="notifications"
            type="notab"
          />

          <div className="px-6 md:px-9 pt-10 md:flex text-pTagGrey ">
            <div className="md:w-5/12 mx-auto">
              <div className="flex items-center py-3 justify-between">
                <p>Push Notifications</p>

                <div className="toggle">
                  <Switch
                    checked={checked}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setChecked(event.target.checked)
                    }
                    sx={(theme: Theme) => ({
                      "--Switch-thumbShadow": "0 3px 7px 0 rgba(0 0 0 / 0.12)",
                      "--Switch-thumbSize": "27px",
                      "--Switch-trackWidth": "55px",
                      "--Switch-trackHeight": "31px",
                      "--Switch-trackBackground":
                        theme.vars.palette.background.level3,
                      [`& .${switchClasses.thumb}`]: {
                        transition: "width 0.2s, left 0.2s",
                      },
                      "&:hover": {
                        "--Switch-trackBackground":
                          theme.vars.palette.background.level3,
                      },
                      "&:active": {
                        "--Switch-thumbWidth": "32px",
                      },
                      [`&.${switchClasses.checked}`]: {
                        "--Switch-trackBackground": "#2FA500",
                        "&:hover": {
                          "--Switch-trackBackground": "#2FA500",
                        },
                      },
                    })}
                  />
                </div>
              </div>
              <div className="flex items-center py-3 border-y border-grey justify-between">
                <p>Email Notifications</p>

                <div className="toggle">
                  <Switch
                    checked={checked}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setChecked(event.target.checked)
                    }
                    sx={(theme: Theme) => ({
                      "--Switch-thumbShadow": "0 3px 7px 0 rgba(0 0 0 / 0.12)",
                      "--Switch-thumbSize": "27px",
                      "--Switch-trackWidth": "55px",
                      "--Switch-trackHeight": "31px",
                      "--Switch-trackBackground":
                        theme.vars.palette.background.level3,
                      [`& .${switchClasses.thumb}`]: {
                        transition: "width 0.2s, left 0.2s",
                      },
                      "&:hover": {
                        "--Switch-trackBackground":
                          theme.vars.palette.background.level3,
                      },
                      "&:active": {
                        "--Switch-thumbWidth": "32px",
                      },
                      [`&.${switchClasses.checked}`]: {
                        "--Switch-trackBackground": "#2FA500",
                        "&:hover": {
                          "--Switch-trackBackground": "#2FA500",
                        },
                      },
                    })}
                  />
                </div>
              </div>
              <div className="flex items-center py-3 justify-between">
                <p>Promotion Management</p>

                <div className="toggle">
                  <Switch
                    checked={checked}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setChecked(event.target.checked)
                    }
                    sx={(theme: Theme) => ({
                      "--Switch-thumbShadow": "0 3px 7px 0 rgba(0 0 0 / 0.12)",
                      "--Switch-thumbSize": "27px",
                      "--Switch-trackWidth": "55px",
                      "--Switch-trackHeight": "31px",
                      "--Switch-trackBackground":
                        theme.vars.palette.background.level3,
                      [`& .${switchClasses.thumb}`]: {
                        transition: "width 0.2s, left 0.2s",
                      },
                      "&:hover": {
                        "--Switch-trackBackground":
                          theme.vars.palette.background.level3,
                      },
                      "&:active": {
                        "--Switch-thumbWidth": "32px",
                      },
                      [`&.${switchClasses.checked}`]: {
                        "--Switch-trackBackground": "#2FA500",
                        "&:hover": {
                          "--Switch-trackBackground": "#2FA500",
                        },
                      },
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
