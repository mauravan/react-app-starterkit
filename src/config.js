import { Formio } from '@formio/react';

const getQuery = (query) => {
  window.location.search.substr(1).split('&').forEach(function(item) {
    query[item.split('=')[0]] = item.split('=')[1] && decodeURIComponent(item.split('=')[1]);
  });

  return query;
}

const query = getQuery({});
const PROJECT_URL = query.projectUrl || 'https://btywzajnwlxpiym.form.io/';
const API_URL = query.apiUrl || 'https://api.form.io';

export const AppConfig = {
  projectUrl: PROJECT_URL,
  apiUrl: API_URL
};

Formio.setProjectUrl(AppConfig.projectUrl);
Formio.setBaseUrl(AppConfig.apiUrl);
