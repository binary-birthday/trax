import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  { icon: MdHome, label: "Home", route: "/home" },
  { icon: MdSearch, label: "Search", route: "/search" },
  { icon: MdLibraryMusic, label: "Your Library", route: "/library" },
];

const musicMenu = [
  { icon: MdPlaylistAdd, label: "Create Playlist", route: "/home" },
  { icon: MdFavorite, label: "Favorites", route: "/favorites" },
];

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)

const SideBar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box paddingBottom="30px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.label}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} />
                      {menu.label}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.label}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} />
                      {menu.label}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider marginY="20px" color="gray.800" />
        <Box height="66%" overflowY="auto" paddingY="20px" >
          <List spacing={2}>
          {playlists.map(playlist => (
            <ListItem key={playlist} paddingX="20px">
              <LinkBox >
              <NextLink href="/" passHref >
                <LinkOverlay>
                  {playlist}
                </LinkOverlay>
              </NextLink>
              </LinkBox>
            </ListItem>
          ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
