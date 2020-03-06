# TO-DO

## <u><b>UserAuthForm </b></u>

2. ### Check if valid input fields

## <u><b> SocialSettings </b></u>

1. ### Delete functionality

- ##### Client: button on SocialSettings component with @click method that sends an API request to server

2. ### Custom link

- #### Add option to add new unidentified link.

3. ### Platform Verification / callback Authentication

## <u><b> Friends List </b></u>

- Add Friend Component

## <u><b> Content </b></u>
- AddContentComponent

## <u><b> Mobile Friendly </b></u>
1. ### Responsive header navbar

## <u><b> Web </b></u>

- element level, group level, network level. Three groups for web input.
- Build out some connection functions to output nodes:
  -- Friends
  -- Friends + their Friends
  -- just their friends
  -- mutual connections w/ friend
  -- reciprocal communication (connection)
  -- one-way communnication (connection)
  -- maintained relationships.
  ----- Engagement relationship patterns of whose profiles have been clicked.

public: {0} - Everyone NOT in [1] or {2} group.
Friends of Friends {1} - All (your.friends(friends)) Friends XAND (your.friends())

ID: {
socialLinks: [],
content: [],
connections: {
Friends,
FriendsOfFriends
},
}
