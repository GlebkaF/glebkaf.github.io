(function () {
  Lampa.VPN.region = (call) =>
    call({
      time: Date.now(),
      region: "uk",
    });
})();
