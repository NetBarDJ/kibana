/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { createAction } from 'redux-actions';
import { DocumentSearchResult } from '../../model';

export interface DocumentSearchPayload {
  query: string;
  page?: string;
  languages?: string;
  repositories?: string;
}

export interface RepositorySearchPayload {
  query: string;
}

export interface SearchOptions {
  repoScopes: string[];
}

// For document search page
export const documentSearch = createAction<DocumentSearchPayload>('DOCUMENT SEARCH');
export const documentSearchSuccess = createAction<DocumentSearchResult>('DOCUMENT SEARCH SUCCESS');
export const documentSearchFailed = createAction<Error>('DOCUMENT SEARCH FAILED');

// For repository search page
export const repositorySearch = createAction<RepositorySearchPayload>('REPOSITORY SEARCH');
export const repositorySearchSuccess = createAction('REPOSITORY SEARCH SUCCESS');
export const repositorySearchFailed = createAction<Error>('REPOSITORY SEARCH FAILED');

export const changeSearchScope = createAction<string>('CHANGE SEARCH SCOPE');

// For repository search typeahead
export const repositorySearchQueryChanged = createAction<RepositorySearchPayload>(
  'REPOSITORY SEARCH QUERY CHANGED'
);
export const repositoryTypeaheadSearchSuccess = createAction<string>('REPOSITORY SEARCH SUCCESS');
export const repositoryTypeaheadSearchFailed = createAction<string>('REPOSITORY SEARCH FAILED');

export const saveSearchOptions = createAction<SearchOptions>('SAVE SEARCH OPTIONS');