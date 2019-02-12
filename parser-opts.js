"use strict";

module.exports = {
  headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
  headerCorrespondence: [`type`, `scope`, `subject`],
  noteKeywords: [`BREAKING CHANGE`, `CHANGELOG`],
  revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
  revertCorrespondence: [`header`, `hash`]
};
