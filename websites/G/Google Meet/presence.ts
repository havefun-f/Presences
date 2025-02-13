const presence = new Presence({
    clientId: "701914032541794386"
  }),
  time = Math.floor(Date.now() / 1000);

presence.on("UpdateData", () => {
  const presenceData: PresenceData = {
      largeImageKey: "meetlogo",
      startTimestamp: time
    },
    path = document.location.pathname.toLowerCase();

  if (path === "/") {
    presenceData.details = "Home page";
    presenceData.state = "Waiting";
  } else {
    const users = (
      document.querySelector(".wnPUne") ?? document.querySelector(".uGOf1d")
    ).innerHTML;
    presenceData.smallImageKey = "vcall";
    presenceData.details = "In a meeting";
    presenceData.state = `${users} people are in the call`;
  }

  presence.setActivity(presenceData);
});
