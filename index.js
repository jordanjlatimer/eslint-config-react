module.exports = {
	extends: [
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended"
	],
	plugins: [
		"react",
		"react-hooks",
		"jsx-a11y"
	],
	rules: {
		"react/boolean-prop-naming": "error",
		"react/default-props-match-prop-types": "error",
		"react/destructuring-assignment": ["warn", "always", { destructureInSignature: "always" }],
    "react/display-name": "off",
		"react/function-component-definition": "error",
		"react/hook-use-state": "error",
		"react/iframe-missing-sandbox": "error",
		"react/no-access-state-in-setstate": "error",
		"react/no-array-index-key": "error",
		"react/no-arrow-function-lifecycle": "error",
		"react/no-danger": "error",
		"react/no-did-mount-set-state": "error",
		"react/no-did-update-set-state": "error",
		"react/no-invalid-html-attribute": "error",
		"react/no-multi-comp": "error",
		"react/no-redundant-should-component-update": "error",
		"react/no-this-in-sfc": "error",
		"react/no-typos": "error",
		"react/no-unsafe": "error",
		"react/no-unstable-nested-components": "error",
		"react/no-unused-class-component-methods": "error",
		"react/no-unused-prop-types": "error",
		"react/no-unused-state": "error",
		"react/no-will-update-set-state": "error",
		"react/prefer-es6-class": "error",
		"react/prefer-exact-props": "error",
		"react/prefer-read-only-props": "error",
		"react/prefer-stateless-function": "error",
		"react/require-optimization": "error",
		"react/self-closing-comp": "error",
		"react/state-in-constructor": "error",
		"react/style-prop-object": "error",
		"react/void-dom-elements-no-children": "error",
		"react/jsx-boolean-value": "warn",
		"react/jsx-curly-brace-presence": "warn",
		"react/jsx-filename-extension": ["error", {"extensions": [".jsx", ".tsx"] }],
		"react/jsx-fragments": "error",
		"react/jsx-handler-names": "warn",
		"react/jsx-indent": ["warn", 2],
		"react/jsx-indent-props": ["warn", 2],
		"react/jsx-no-bind": "error",
		"react/jsx-no-constructed-context-values": "error",
		"react/jsx-no-leaked-render": "error",
		"react/jsx-no-script-url": "error",
		"react/jsx-no-useless-fragment": "warn",
		"react/jsx-pascal-case": "error",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "error"
	}
}