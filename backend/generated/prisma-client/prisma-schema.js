module.exports = {
        typeDefs: /* GraphQL */ `type AggregateClick {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregatePosition {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Click {
  id: ID!
  target: String!
}

type ClickConnection {
  pageInfo: PageInfo!
  edges: [ClickEdge]!
  aggregate: AggregateClick!
}

input ClickCreateInput {
  target: String!
}

type ClickEdge {
  node: Click!
  cursor: String!
}

enum ClickOrderByInput {
  id_ASC
  id_DESC
  target_ASC
  target_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClickPreviousValues {
  id: ID!
  target: String!
}

type ClickSubscriptionPayload {
  mutation: MutationType!
  node: Click
  updatedFields: [String!]
  previousValues: ClickPreviousValues
}

input ClickSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClickWhereInput
  AND: [ClickSubscriptionWhereInput!]
  OR: [ClickSubscriptionWhereInput!]
  NOT: [ClickSubscriptionWhereInput!]
}

input ClickUpdateInput {
  target: String
}

input ClickWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  target: String
  target_not: String
  target_in: [String!]
  target_not_in: [String!]
  target_lt: String
  target_lte: String
  target_gt: String
  target_gte: String
  target_contains: String
  target_not_contains: String
  target_starts_with: String
  target_not_starts_with: String
  target_ends_with: String
  target_not_ends_with: String
  AND: [ClickWhereInput!]
  OR: [ClickWhereInput!]
  NOT: [ClickWhereInput!]
}

input ClickWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  text: String!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  text: String!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  text: String!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  text: String
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createClick(data: ClickCreateInput!): Click!
  updateClick(data: ClickUpdateInput!, where: ClickWhereUniqueInput!): Click
  updateManyClicks(data: ClickUpdateInput!, where: ClickWhereInput): BatchPayload!
  upsertClick(where: ClickWhereUniqueInput!, create: ClickCreateInput!, update: ClickUpdateInput!): Click!
  deleteClick(where: ClickWhereUniqueInput!): Click
  deleteManyClicks(where: ClickWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createPosition(data: PositionCreateInput!): Position!
  updatePosition(data: PositionUpdateInput!, where: PositionWhereUniqueInput!): Position
  updateManyPositions(data: PositionUpdateInput!, where: PositionWhereInput): BatchPayload!
  upsertPosition(where: PositionWhereUniqueInput!, create: PositionCreateInput!, update: PositionUpdateInput!): Position!
  deletePosition(where: PositionWhereUniqueInput!): Position
  deleteManyPositions(where: PositionWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Position {
  id: ID!
  x: String!
  y: String!
  z: String!
}

type PositionConnection {
  pageInfo: PageInfo!
  edges: [PositionEdge]!
  aggregate: AggregatePosition!
}

input PositionCreateInput {
  x: String!
  y: String!
  z: String!
}

type PositionEdge {
  node: Position!
  cursor: String!
}

enum PositionOrderByInput {
  id_ASC
  id_DESC
  x_ASC
  x_DESC
  y_ASC
  y_DESC
  z_ASC
  z_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PositionPreviousValues {
  id: ID!
  x: String!
  y: String!
  z: String!
}

type PositionSubscriptionPayload {
  mutation: MutationType!
  node: Position
  updatedFields: [String!]
  previousValues: PositionPreviousValues
}

input PositionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PositionWhereInput
  AND: [PositionSubscriptionWhereInput!]
  OR: [PositionSubscriptionWhereInput!]
  NOT: [PositionSubscriptionWhereInput!]
}

input PositionUpdateInput {
  x: String
  y: String
  z: String
}

input PositionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  x: String
  x_not: String
  x_in: [String!]
  x_not_in: [String!]
  x_lt: String
  x_lte: String
  x_gt: String
  x_gte: String
  x_contains: String
  x_not_contains: String
  x_starts_with: String
  x_not_starts_with: String
  x_ends_with: String
  x_not_ends_with: String
  y: String
  y_not: String
  y_in: [String!]
  y_not_in: [String!]
  y_lt: String
  y_lte: String
  y_gt: String
  y_gte: String
  y_contains: String
  y_not_contains: String
  y_starts_with: String
  y_not_starts_with: String
  y_ends_with: String
  y_not_ends_with: String
  z: String
  z_not: String
  z_in: [String!]
  z_not_in: [String!]
  z_lt: String
  z_lte: String
  z_gt: String
  z_gte: String
  z_contains: String
  z_not_contains: String
  z_starts_with: String
  z_not_starts_with: String
  z_ends_with: String
  z_not_ends_with: String
  AND: [PositionWhereInput!]
  OR: [PositionWhereInput!]
  NOT: [PositionWhereInput!]
}

input PositionWhereUniqueInput {
  id: ID
}

type Post {
  id: ID!
  title: String!
  published: Boolean!
  author: User
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String!
  published: Boolean
  author: UserCreateOneWithoutPostsInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  title: String!
  published: Boolean
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  published_ASC
  published_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  published: Boolean!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  published: Boolean
  author: UserUpdateOneWithoutPostsInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  title: String
  published: Boolean
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  published: Boolean
  published_not: Boolean
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  click(where: ClickWhereUniqueInput!): Click
  clicks(where: ClickWhereInput, orderBy: ClickOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Click]!
  clicksConnection(where: ClickWhereInput, orderBy: ClickOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClickConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  position(where: PositionWhereUniqueInput!): Position
  positions(where: PositionWhereInput, orderBy: PositionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Position]!
  positionsConnection(where: PositionWhereInput, orderBy: PositionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PositionConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  click(where: ClickSubscriptionWhereInput): ClickSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  position(where: PositionSubscriptionWhereInput): PositionSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  name: String!
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  email: String
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  name: String
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    