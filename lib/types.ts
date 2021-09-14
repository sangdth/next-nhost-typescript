import { Entity, Status } from './enums';

/* Helpers for constructing the result of GraphQL results */
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends Record<string, unknown>
      ? RecursivePartial<T[P]>
      : T[P];
};

// export type OptionValue = { [k: string]: string | number | boolean | OptionValue | OptionValue[] };

export type MakeInputType<T, K extends keyof T> = RecursivePartial<Pick<T, K>> & { id: string };

// export type SitePicked =
//   | 'id'
//   | 'name'
//   | 'description'
//   | 'collections'
//   | 'slug'
//   | 'status';
// export type SiteInput = MakeInputType<SiteType, SitePicked>;

export type Returning<T> = { returning: T[]; };

export type AggregateData<T, K extends Entity> = Record<
  `${Lowercase<K>}_aggregate`, { nodes: T[] }
>;
export type SingleData<T, K extends Entity> = Record<
  `${Lowercase<K>}_by_pk`, T
>;
export type InsertedOneData<T, K extends Entity> = Record<
  `insert_${Lowercase<K>}_one`, T
>;
export type DeletedByKeyData<T, K extends Entity> = Record<
  `delete_${Lowercase<K>}_by_pk`, T
>;
export type UpdatedData<T, K extends Entity> = Record<
  `update_${Lowercase<K>}`, Returning<T>
>;

export type UserData = SingleData<UserType, Entity.Users>;
// export type SitesAggregateData = AggregateData<SiteType, Entity.Sites>;
// export type SiteData = SingleData<SiteType, Entity.Sites>;
// export type SiteInsertedData = InsertedData<SiteType, Entity.Sites>;
// export type SiteDeletedData = DeletedData<SiteType, Entity.Sites>;

export type StorageResponse = {
  AcceptRanges: string;
  ContentLength: number;
  ContentType: string;
  ETag: string;
  LastModified: string;
  Metadata: {
    token: string;
  };
  key: string;
};

export type BaseType = {
  id: string;
  created_at: string | Date;
  updated_at: string | Date;
  user_id: string;
  status: Status;
};

export type AccountType = Exclude<BaseType, 'status'> & {
  active: boolean;
  email: string | null;
  new_email: string | null;
  password_hash: string | null;
  default_role: string;
  is_anonymous: boolean;
  custom_register_data: string | null;
  opt_secret: string | null;
  mfa_enabled: boolean;
  ticket: string;
  ticket_expires_at: string | Date;
};

export type UserType = Exclude<BaseType, 'user_id' | 'status'> & {
  display_name: string | null;
  avatar_url: string | null;
  account: AccountType;
};
