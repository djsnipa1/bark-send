{ pkgs }: {
    deps = [
      pkgs.unzip
      pkgs.fd
      pkgs.neovim
      pkgs.pastel
    # pkgs.pastebinit
      pkgs.zip
      pkgs.nodePackages.pnpm
      pkgs.nodejs-slim_21
      pkgs.lf
      pkgs.lazygit
      pkgs.eza
    # pkgs.httplz
      pkgs.gh
      pkgs.nodePackages.svelte-language-server
      pkgs.nodePackages.vscode-html-languageserver-bin
      pkgs.nodePackages.vscode-css-languageserver-bin
    # pkgs.yt-dlp
    # pkgs.ffmpeg_5-full
    # pkgs.mediainfo
    # pkgs.exiftool
      pkgs.turso-cli
    ];
}
