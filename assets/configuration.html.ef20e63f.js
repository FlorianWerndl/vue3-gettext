import{_ as n,c as s}from"./app.84c2dfda.js";const a={},t=s(`<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><p>Once you have extracted your messages and compiled a <code>.json</code> file, you are ready to set up the gettext plugin in your <code>main.ts</code>/<code>main.js</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createGettext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue3-gettext&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> translations <span class="token keyword">from</span> <span class="token string">&quot;./language/translations.json&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> gettext <span class="token operator">=</span> <span class="token function">createGettext</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  availableLanguages<span class="token operator">:</span> <span class="token punctuation">{</span>
    en<span class="token operator">:</span> <span class="token string">&quot;English&quot;</span><span class="token punctuation">,</span>
    de<span class="token operator">:</span> <span class="token string">&quot;Deutsch&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  defaultLanguage<span class="token operator">:</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>
  translations<span class="token operator">:</span> translations<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>gettext<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>All the available options can be found in the <code>GetTextOptions</code> type, these are the default values:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  availableLanguages<span class="token operator">:</span> <span class="token punctuation">{</span> en<span class="token operator">:</span> <span class="token string">&quot;English&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  defaultLanguage<span class="token operator">:</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>
  mutedLanguages<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  silent<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  translations<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  setGlobalProperties<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  provideDirective<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  provideComponent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="gotchas" tabindex="-1"><a class="header-anchor" href="#gotchas" aria-hidden="true">#</a> Gotchas</h2><h3 id="using-gettext-functions-outside-of-components" tabindex="-1"><a class="header-anchor" href="#using-gettext-functions-outside-of-components" aria-hidden="true">#</a> Using gettext functions outside of components</h3><p>If you need to have plain typescript/javascript files that must access gettext, you may simple move and export gettext from a separate file:</p><p><code>gettext.ts</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createGettext</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Then import and use the functions:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> gettext <span class="token keyword">from</span> <span class="token string">&quot;./gettext&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> $gettext <span class="token punctuation">}</span> <span class="token operator">=</span> gettext<span class="token punctuation">;</span>

<span class="token keyword">const</span> myTest <span class="token operator">=</span> <span class="token function">$gettext</span><span class="token punctuation">(</span><span class="token string">&quot;My translation message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,12);function e(p,o){return t}var l=n(a,[["render",e]]);export{l as default};