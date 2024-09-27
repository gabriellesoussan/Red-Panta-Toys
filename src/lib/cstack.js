import ContentstackLivePreview from "@contentstack/live-preview-utils";
import Contentstack from "contentstack";
Contentstack.Utils.addEditableTags();

const Stack = Contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
  environment: process.env.CONTENTSTACK_ENVIRONMENT,
  live_preview: {
    preview_token: process.env.CONTENTSTACK_PREVIEW_TOKEN,
    enable: true,
    host: process.env.CONTENTSTACK_REGION == 'NA' ? "rest-preview.contentstack.com" : "eu-rest-preview.contentstack.com"
  },
  region: process.env.CONTENTSTACK_REGION == 'NA' ? Contentstack.Region.NA : Contentstack.Region.EU
});

ContentstackLivePreview.init({
    stackSdk: Stack,
    stackDetails: {
      apiKey: process.env.CONTENTSTACK_API_KEY
    },
    clientUrlParams: {
      protocol: "https",
      host: process.env.CONTENTSTACK_REGION == 'NA' ? "app.contentstack.com" : "eu-app.contentstack.com",
      port: 443,
    },
  });

export default {
  getElement(id, type, locale) {
    return new Promise((resolve, reject) => {
      const Query = Stack.ContentType(type)
        .Entry(id)
        .language(locale ? locale : "en")
        .toJSON()
        .fetch()
        .then(
          function success(entry) {
            Contentstack.Utils.addEditableTags(entry, type, true, locale);
            resolve(entry);
          },
          function error(err) {
            console.log("error", err);
            reject(err);
          }
        );
    });
  },

  getElementWithRefs(id, type, locale, references) {
    return new Promise((resolve, reject) => {
      const Query = Stack.ContentType(type)
        .Entry(id)
        .includeReference(...references)
        .language(locale ? locale : "en")
        .toJSON()
        .fetch()
        .then(
          function success(entry) {
            Contentstack.Utils.addEditableTags(entry, type, true, locale);
            resolve(entry);
          },
          function error(err) {
            console.log("error", err);
            reject(err);
          }
        );
    });
  },

  getElementByUrl(type, url, locale) {
    return new Promise((resolve, reject) => {
      const Query = Stack.ContentType(type)
        .Query()
        .where("url", { $eq: url })
        .language(locale ? locale : "en")
        .toJSON()
        .find()
        .then(
          function success(data) {
            const entry = data[0][0];
            Contentstack.Utils.addEditableTags(entry, type, true, locale);
            resolve(entry);
          },
          function error(err) {
            reject(err);
          }
        );
    });
  },

  getElementByUrlWithRefs(type, url, locale, references) {
    return new Promise((resolve, reject) => {
      const Query = Stack.ContentType(type)
        .Query()
        .where("url", { $eq: url })
        .language(locale ? locale : "en")
        .includeReference(...references)
        .toJSON()
        .find()
        .then(
          function success(data) {
            const entry = data[0][0];
            Contentstack.Utils.addEditableTags(entry, type, true, locale);
            resolve(entry);
          },
          function error(err) {
            reject(err);
          }
        );
    });
  },

  getElementByType(type, locale) {
    return new Promise((resolve, reject) => {
      const Query = Stack.ContentType(type)
        .Query()
        .language(locale ? locale : "en")
        .toJSON()
        .find()
        .then(
          function success(entry) {
            //console.log('entry', entry);
            Contentstack.Utils.addEditableTags(entry[0][0], type, true, locale);
            resolve(entry);
          },
          function error(err) {
            console.log("error", err);
            reject(err);
          }
        );
    });
  },

  getElementByTypeWtihRefs(type, locale, references) {
    return new Promise((resolve, reject) => {
      const Query = Stack.ContentType(type)
        .Query()
        .language(locale ? locale : "en")
        .includeReference(...references)
        .toJSON()
        .find()
        .then(
          function success(entry) {
            //console.log('entry', entry);
            Contentstack.Utils.addEditableTags(entry[0][0], type, true, locale);
            resolve(entry);
          },
          function error(err) {
            console.log("error", err);
            reject(err);
          }
        );
    });
  },

  getElementByTypeByTaxonomy(type, locale, term) {
    return new Promise((resolve, reject) => {
      const Query = Stack.ContentType(type)
        .Query()
        .query({ "taxonomies.article": { $in: term } })
        .language(locale ? locale : "en")
        .toJSON()
        .find()
        .then(
          function success(entry) {
            // console.log('entry', entry);
            Contentstack.Utils.addEditableTags(entry[0][0], type, true, locale);
            resolve(entry);
          },
          function error(err) {
            console.log("error", err);
            reject(err);
          }
        );
    })
  },

  getPDPbyProduct(type, url, locale){
    return new Promise((resolve, reject) => {
        const Query = Stack.ContentType(type)
          .Query()
          .where("product.data.url", url)
          .language(locale ? locale : "en")
          .toJSON()
          .find()
          .then(
            function success(entry) {
              // console.log('entry', entry);
              Contentstack.Utils.addEditableTags(entry[0][0], type, true, locale);
              resolve(entry[0][0]);
            },
            function error(err) {
              console.log("error", err);
              reject(err);
            }
          );
      })
  },

  getStack() {
    return Stack;
  },
};

export const onEntryChange = ContentstackLivePreview.onEntryChange;
