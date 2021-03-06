/*
 * This file is part of the date-fns-strftime npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/mit.
 */

declare module "date-fns-strftime" {
  function strftime(date: Date | string | number, format?: string, options?: {locale?: Object}): string;
  export = strftime;
}
