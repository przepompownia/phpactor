window.BENCHMARK_DATA = {
  "lastUpdate": 1788026627903,
  "repoUrl": "https://github.com/przepompownia/phpactor",
  "entries": {
    "Phpactor Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "committer": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "distinct": true,
          "id": "d4c868bbdf296817c8c8deef695c947720a9c540",
          "message": "Test",
          "timestamp": "2026-03-09T20:39:16Z",
          "tree_id": "1bed35be2645658643d342d95add617a45969f6c",
          "url": "https://github.com/przepompownia/phpactor/commit/d4c868bbdf296817c8c8deef695c947720a9c540"
        },
        "date": 1773100741278,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ClassMemberCompletorBench::benchComplete",
            "value": 10349.3,
            "range": "± 2.41%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete",
            "value": 166039,
            "range": "± 0.72%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete",
            "value": 2427.6,
            "range": "± 0.96%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete",
            "value": 22604.1,
            "range": "± 0.98%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 33.139,
            "range": "± 1.06%",
            "unit": "μs",
            "extra": "0 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 34.805,
            "range": "± 2.54%",
            "unit": "μs",
            "extra": "0 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 57.313,
            "range": "± 0.95%",
            "unit": "μs",
            "extra": "0 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 20.151,
            "range": "± 6.1%",
            "unit": "μs",
            "extra": "0 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 93.581,
            "range": "± 1.21%",
            "unit": "μs",
            "extra": "0 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 56.798,
            "range": "± 1.58%",
            "unit": "μs",
            "extra": "0 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 17749.08,
            "range": "± 0.9%",
            "unit": "μs",
            "extra": "0 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 589,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 1357,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 12970,
            "range": "± 1.3%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 12925.6,
            "range": "± 1.74%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 88.31,
            "range": "± 2.44%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 89.74,
            "range": "± 1.86%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 91.21,
            "range": "± 6.79%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 87.78,
            "range": "± 1.74%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 88.42,
            "range": "± 1.49%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 88.13,
            "range": "± 1.2%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate",
            "value": 88.7,
            "range": "± 1.77%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.585,
            "range": "± 1.26%",
            "unit": "μs",
            "extra": "0 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.055,
            "range": "± 3.7%",
            "unit": "μs",
            "extra": "0 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch",
            "value": 151.6,
            "range": "± 7.62%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch",
            "value": 147.5,
            "range": "± 7.05%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch",
            "value": 140,
            "range": "± 3.66%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch",
            "value": 142.8,
            "range": "± 7.17%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1211940,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.086,
            "range": "± 5.2%",
            "unit": "μs",
            "extra": "0 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 310,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 314,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 298,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 637288,
            "range": "± 176.33%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 320345.8,
            "range": "± 0.32%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics",
            "value": 72052.6,
            "range": "± 1.36%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics",
            "value": 28209,
            "range": "± 0.5%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics",
            "value": 24650,
            "range": "± 0.82%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics",
            "value": 30357.4,
            "range": "± 0.5%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics",
            "value": 822819,
            "range": "± 0.69%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 121568,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1619,
            "range": "± 3.22%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 3062.3,
            "range": "± 1.49%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 16982.2,
            "range": "± 1.09%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 154302.2,
            "range": "± 1.41%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 147304.4,
            "range": "± 0.47%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1773.5,
            "range": "± 7.99%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 3066.4,
            "range": "± 0.84%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2223.2,
            "range": "± 1.83%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 976.22,
            "range": "± 0.29%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1469.44,
            "range": "± 1.34%",
            "unit": "μs",
            "extra": "0 iterations, 10 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 6011,
            "range": "± 0%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 97728.75,
            "range": "± 1.28%",
            "unit": "μs",
            "extra": "0 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 105146,
            "range": "± 0.61%",
            "unit": "μs",
            "extra": "0 iterations, 2 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 525554,
            "range": "± 200.55%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 120009.2,
            "range": "± 0.92%",
            "unit": "μs",
            "extra": "0 iterations, 1 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dan.t.leech@gmail.com",
            "name": "dantleech",
            "username": "dantleech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cb25ad263b9d3aa87f98a6040bdc3194d715766c",
          "message": "gh-3022: explictly specify byte order (#3033)\n\nIf ext-mbstring is not installed, then\nhttps://github.com/symfony/polyfill-mbstring will take over. The\npolyfill uses `iconv`\n\nThere is an off-by-one issue that happens when the ext-mbstring is not\nenabled.\n\n`mbstring` outputs UTF-16BE (first in screenshot) and `iconv` outputs UTF-16LE and also adds BOM (fffe).\n\nBy explicitly specifying the byte order we remove the ambiguity.",
          "timestamp": "2026-03-21T21:25:34Z",
          "tree_id": "dfd0bce59f7ac156b4ed6d2d6477b9d2342bc560",
          "url": "https://github.com/przepompownia/phpactor/commit/cb25ad263b9d3aa87f98a6040bdc3194d715766c"
        },
        "date": 1774198304504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 10.172219178082127,
            "range": "± 1.79%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 164.0545557729949,
            "range": "± 0.53%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.2872230919765024,
            "range": "± 1.51%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.471127201565263,
            "range": "± 1.32%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 33.02133072407029,
            "range": "± 1.85%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 34.46136986301364,
            "range": "± 1.81%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 56.74027397260274,
            "range": "± 4.92%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 19.627123287670933,
            "range": "± 1.04%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 92.6194911937387,
            "range": "± 1.16%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 57.1482191780814,
            "range": "± 1.43%",
            "unit": "μs",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 17224.697455968682,
            "range": "± 3.37%",
            "unit": "μs",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 571,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1353,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 12294.027397260303,
            "range": "± 1.02%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 12422.718199608706,
            "range": "± 0.88%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.08858649706457843,
            "range": "± 2.20%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.09083248532289623,
            "range": "± 0.93%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.08978434442270126,
            "range": "± 2.57%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.09126262230919847,
            "range": "± 1.17%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.08970958904109515,
            "range": "± 2.29%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.09169921722113611,
            "range": "± 1.56%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.08925792563600818,
            "range": "± 2.13%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.6720375733855073,
            "range": "± 0.99%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.05677690802348304,
            "range": "± 4.01%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.1376438356164383,
            "range": "± 6.66%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.13859295499021515,
            "range": "± 8.05%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.13457534246575334,
            "range": "± 5.67%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.1338630136986301,
            "range": "± 4.49%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1137152,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.09113894324853218,
            "range": "± 9.38%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 297,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 289,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 295,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 79415,
            "range": "± 176.41%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 317208.7338551796,
            "range": "± 0.68%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 71041.66927592906,
            "range": "± 0.60%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 28546.7514677104,
            "range": "± 0.80%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 25071.54207436461,
            "range": "± 0.31%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 30154.69863013723,
            "range": "± 0.26%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 815813.4500978366,
            "range": "± 0.44%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 117504,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1600.1917808219387,
            "range": "± 1.09%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 3046.0410958904104,
            "range": "± 0.64%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 16986.63600782781,
            "range": "± 0.57%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 151407.45596869098,
            "range": "± 0.39%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 145135.57729941444,
            "range": "± 0.59%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1739.1213307240876,
            "range": "± 2.67%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 3075.3033268101626,
            "range": "± 1.06%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2228.634050880639,
            "range": "± 0.93%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 968.9585127201609,
            "range": "± 0.87%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1414.3880626223138,
            "range": "± 1.46%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5788,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 97994.53816046982,
            "range": "± 3.02%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 103061.04207436391,
            "range": "± 2.26%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 169579,
            "range": "± 195.22%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 116076.77495107683,
            "range": "± 0.76%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dan.t.leech@gmail.com",
            "name": "dantleech",
            "username": "dantleech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "613aa65ce2944b44c8fbb92281ce11bd8c9dfbd6",
          "message": "Optimise index service and command (#3037)\n\nThis commit introduces a service to optimise the index.\n\nOptimising currently involces of iterating over all records and pruning\nany records that are defined in non-existing files and removing\n\n- Introduced index iterator\n- Optimizer\n- Add optimiser service that runs every hour by default\n- Add command to manually invoke the optimiser\n- Add LSP notification `phpactor/indexer/optimise` to manually invoke if\n  necessary.",
          "timestamp": "2026-04-13T22:22:49+01:00",
          "tree_id": "ef2b52c248cda116c5ac9866d838659f54e835da",
          "url": "https://github.com/przepompownia/phpactor/commit/613aa65ce2944b44c8fbb92281ce11bd8c9dfbd6"
        },
        "date": 1776123117235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 9.965146771037158,
            "range": "± 2.10%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 163.8702054794515,
            "range": "± 1.53%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.268115459882594,
            "range": "± 2.01%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.250520547944802,
            "range": "± 0.93%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 27.451702544031356,
            "range": "± 1.44%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 29.43706457925658,
            "range": "± 1.12%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 50.55659491193772,
            "range": "± 1.53%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 15.292641878669162,
            "range": "± 1.72%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 87.44097847358042,
            "range": "± 1.79%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 56.483835616438164,
            "range": "± 1.92%",
            "unit": "μs",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 17162.50176125242,
            "range": "± 2.82%",
            "unit": "μs",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 560,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1435,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 12031.332681017764,
            "range": "± 1.16%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 12207.41095890417,
            "range": "± 0.66%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.09129373776908205,
            "range": "± 1.49%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.09185009784735686,
            "range": "± 2.47%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.0913776908023475,
            "range": "± 2.30%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.09105890410958928,
            "range": "± 5.38%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.0900739726027391,
            "range": "± 2.24%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.09023992172211305,
            "range": "± 2.35%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.09048590998043149,
            "range": "± 1.35%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.679776516634047,
            "range": "± 2.25%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.05740958904109584,
            "range": "± 3.11%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.1357475538160469,
            "range": "± 10.57%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.13746575342465747,
            "range": "± 10.01%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.13080039138943242,
            "range": "± 7.03%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.13297260273972591,
            "range": "± 6.53%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1158385,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.09022700587084156,
            "range": "± 10.82%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 299,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 313,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 344,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 322308.988258317,
            "range": "± 126.87%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1570.1917808219268,
            "range": "± 1.45%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 3059.796477495106,
            "range": "± 0.84%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 17207.219178081636,
            "range": "± 0.41%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 154346.60665362305,
            "range": "± 0.82%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 147479.83757338673,
            "range": "± 0.41%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 73723.55381604671,
            "range": "± 0.72%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 121660,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1742.5812133072811,
            "range": "± 1.96%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 3074.0410958904176,
            "range": "± 2.18%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2199.1506849314655,
            "range": "± 0.75%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5822,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 72470.45792563612,
            "range": "± 0.24%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 28695.36399217244,
            "range": "± 0.90%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 25102.420743639974,
            "range": "± 1.51%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 30148.729941292182,
            "range": "± 0.47%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 824055.487279844,
            "range": "± 0.68%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 960.0491193737836,
            "range": "± 0.49%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1406.8007827788654,
            "range": "± 3.55%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 164139,
            "range": "± 199.91%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 112383.74168297354,
            "range": "± 0.58%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 93511.48825831898,
            "range": "± 0.77%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 99379.04696673201,
            "range": "± 0.37%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "przepompownia@users.noreply.github.com",
            "name": "Tomasz N",
            "username": "przepompownia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a46d386795040bc7974b1995108336488d90fd2",
          "message": "Allow goto definition from first class callables (#3025)",
          "timestamp": "2026-04-18T12:47:07+01:00",
          "tree_id": "1d0f352ee7dd446f234eae329724fa9decd4a15b",
          "url": "https://github.com/przepompownia/phpactor/commit/6a46d386795040bc7974b1995108336488d90fd2"
        },
        "date": 1776600186368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 10.008561643835424,
            "range": "± 1.47%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 154.3497358121326,
            "range": "± 0.85%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.3182583170254465,
            "range": "± 1.41%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.02498630136996,
            "range": "± 0.78%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 30.60829745596886,
            "range": "± 1.65%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 32.47874755381586,
            "range": "± 1.30%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 54.904109589041276,
            "range": "± 1.07%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 18.316281800391355,
            "range": "± 1.03%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 86.0402348336599,
            "range": "± 1.04%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 54.40673189823874,
            "range": "± 3.16%",
            "unit": "μs",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 17284.074363992106,
            "range": "± 2.81%",
            "unit": "μs",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 577,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1394,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 11857.849315068499,
            "range": "± 2.90%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 12014.976516634117,
            "range": "± 0.86%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.07420254403131131,
            "range": "± 4.30%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.07637221135029104,
            "range": "± 2.11%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.07540547945205535,
            "range": "± 3.11%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.0752025440313103,
            "range": "± 3.89%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.07466536203522477,
            "range": "± 4.96%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.0739996086105675,
            "range": "± 3.26%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.07384090019569395,
            "range": "± 2.61%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.566146575342469,
            "range": "± 0.95%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.05906986301369868,
            "range": "± 5.06%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.13879060665362022,
            "range": "± 10.12%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.13795107632093925,
            "range": "± 5.72%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.1346673189823874,
            "range": "± 11.02%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.13353620352250484,
            "range": "± 1.08%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1087833,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.09280039138943233,
            "range": "± 7.96%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 288,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 294,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 293,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 294125.362035225,
            "range": "± 128.45%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1524.0136986301404,
            "range": "± 3.02%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 2937.4422700587033,
            "range": "± 1.72%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 15219.260273972734,
            "range": "± 0.77%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 136846.83757338556,
            "range": "± 0.29%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 130732.30136986288,
            "range": "± 0.63%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 71556.21917808073,
            "range": "± 0.37%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 109276,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1632.365949119377,
            "range": "± 1.83%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 2984.6438356164344,
            "range": "± 4.42%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2089.0998043052923,
            "range": "± 1.24%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5635,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 60993.33855185914,
            "range": "± 0.55%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 26341.09589041068,
            "range": "± 0.52%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 23164.634050879933,
            "range": "± 1.06%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 29393.935420743597,
            "range": "± 0.67%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 738265.1369863008,
            "range": "± 0.70%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 938.0698630137092,
            "range": "± 0.71%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1348.2050880626275,
            "range": "± 1.21%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 165756,
            "range": "± 201.28%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 117727.5146771039,
            "range": "± 1.22%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 97150.95596868842,
            "range": "± 1.41%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 103256.79256360143,
            "range": "± 0.32%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dan.t.leech@gmail.com",
            "name": "dantleech",
            "username": "dantleech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "4f082b6b734af63286c41ed6e7e73dbde3cbc3b4",
          "message": "Do not show client warning when code action process is killed (#3051)\n\n* Do not show client warning when code action process is killed\n\n* Update changelog",
          "timestamp": "2026-06-11T17:18:30+01:00",
          "tree_id": "9ac559e21eae46137f1a163ff8758ac1189f4a9e",
          "url": "https://github.com/przepompownia/phpactor/commit/4f082b6b734af63286c41ed6e7e73dbde3cbc3b4"
        },
        "date": 1781195167399,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.3324207436398927,
            "range": "± 1.37%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.87918982387462,
            "range": "± 0.77%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 9.69750684931512,
            "range": "± 1.41%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 155.48128571428575,
            "range": "± 0.88%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 30.943405088062388,
            "range": "± 1.35%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 32.56759295499019,
            "range": "± 1.29%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 54.52904109589043,
            "range": "± 1.11%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 18.44313111545987,
            "range": "± 1.13%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 85.53675146771063,
            "range": "± 2.03%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 54.91859099804312,
            "range": "± 1.52%",
            "unit": "μs",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 17593.350684931498,
            "range": "± 0.72%",
            "unit": "μs",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 629,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1439,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 11872.452054794536,
            "range": "± 1.99%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 11978.780821917851,
            "range": "± 1.64%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.07805753424657705,
            "range": "± 2.26%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.07610391389432479,
            "range": "± 3.15%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.07529060665362122,
            "range": "± 2.23%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.07530900195694758,
            "range": "± 2.96%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.07750821917808208,
            "range": "± 2.62%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.07692837573385476,
            "range": "± 3.90%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.07734031311154559,
            "range": "± 2.56%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.5949305283757356,
            "range": "± 5.43%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.05858082191780808,
            "range": "± 7.22%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1115124,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.14557534246575324,
            "range": "± 5.30%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.13954990215264185,
            "range": "± 5.95%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.1375205479452053,
            "range": "± 2.06%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.13429158512720152,
            "range": "± 7.95%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.0929843444227007,
            "range": "± 10.94%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 296,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 319,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 314,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 982.9383561643708,
            "range": "± 2.28%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1438.1091976516568,
            "range": "± 4.25%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5676,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 109050,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 61142.39530332662,
            "range": "± 1.74%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 26137.342465753456,
            "range": "± 1.20%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 22970.49119373774,
            "range": "± 0.65%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 29358.08806262198,
            "range": "± 0.37%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 746066.563600766,
            "range": "± 1.01%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 15144.761252446027,
            "range": "± 0.81%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 146936.47945205477,
            "range": "± 157.97%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 130561.67710371799,
            "range": "± 1.35%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 291977.94716241735,
            "range": "± 0.92%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1507.14285714285,
            "range": "± 1.34%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 2904.4657534246653,
            "range": "± 1.99%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 70608.57534246506,
            "range": "± 1.22%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1622.4187866927432,
            "range": "± 0.90%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 2950.92367906069,
            "range": "± 1.45%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2119.849315068507,
            "range": "± 2.78%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 171751.65949119374,
            "range": "± 195.01%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 95906.104696673,
            "range": "± 1.04%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 104021.60861056739,
            "range": "± 0.81%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 115858.4031311161,
            "range": "± 1.67%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dan.t.leech@gmail.com",
            "name": "dantleech",
            "username": "dantleech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f28b5db32fd8f08ee169ecf08dc72ada61a4fb25",
          "message": "Show Phpactor version in the status LSP call (#3060)",
          "timestamp": "2026-08-01T16:30:54+01:00",
          "tree_id": "881145599ffdbc6b65c47e8345507206ac0fb09f",
          "url": "https://github.com/przepompownia/phpactor/commit/f28b5db32fd8f08ee169ecf08dc72ada61a4fb25"
        },
        "date": 1785708593789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 10.303964774951107,
            "range": "± 1.21%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 168.04403131115063,
            "range": "± 0.72%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.3376027397260137,
            "range": "± 2.18%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.504121330723915,
            "range": "± 1.11%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 29.213072407045146,
            "range": "± 1.17%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 31.035029354207236,
            "range": "± 1.43%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 53.21655577299407,
            "range": "± 11.11%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 16.699021526418722,
            "range": "± 1.89%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 91.87819960861066,
            "range": "± 5.04%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 593,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1495,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 59.039726027397485,
            "range": "± 1.47%",
            "unit": "μs",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 18415.4575342466,
            "range": "± 4.27%",
            "unit": "μs",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 12530.929549902121,
            "range": "± 2.37%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 12710.43835616422,
            "range": "± 1.02%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.09333287671232805,
            "range": "± 2.28%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.09131722113502912,
            "range": "± 1.84%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.0918138943248521,
            "range": "± 1.73%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.09151643835616337,
            "range": "± 2.41%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.09112681017612473,
            "range": "± 1.60%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.0931011741682964,
            "range": "± 0.86%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.09347279843444438,
            "range": "± 1.91%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.623760861056755,
            "range": "± 2.46%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.055799412915851575,
            "range": "± 5.55%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.1473698630136986,
            "range": "± 7.17%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.14871232876712315,
            "range": "± 5.10%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.1368023483365948,
            "range": "± 7.01%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.1361956947162426,
            "range": "± 10.39%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.09117221135029333,
            "range": "± 10.26%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1190162,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 323,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 303,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 307,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 327978.31115459884,
            "range": "± 127.13%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 977.6440313111543,
            "range": "± 0.92%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1476.32035225046,
            "range": "± 0.61%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 123961,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 16941.013698630115,
            "range": "± 0.56%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 154098.09001957162,
            "range": "± 0.69%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 148319.31506849334,
            "range": "± 0.71%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5923,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 72146.8356164367,
            "range": "± 0.56%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 28878.005870841593,
            "range": "± 0.48%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 25391.369863013642,
            "range": "± 1.04%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 30388.342465753674,
            "range": "± 0.62%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 827239.7906066403,
            "range": "± 0.33%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 76148.46966731893,
            "range": "± 0.81%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1745.8043052837675,
            "range": "± 2.29%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 3096.4227005870616,
            "range": "± 1.76%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2233.42074363992,
            "range": "± 1.15%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1620.9021526418746,
            "range": "± 3.20%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 3096.608610567513,
            "range": "± 0.95%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 173124.49119373778,
            "range": "± 197.66%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 116846.8904109591,
            "range": "± 1.01%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 95671.40410959182,
            "range": "± 0.42%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 102521.86497064616,
            "range": "± 0.37%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "committer": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "distinct": false,
          "id": "f67b7753b966c874735a064978dd89837a369f59",
          "message": "Bump CL",
          "timestamp": "2026-08-15T12:52:59+01:00",
          "tree_id": "9bad45f8d35e20b583318510994f7ea0cc10a9b1",
          "url": "https://github.com/przepompownia/phpactor/commit/f67b7753b966c874735a064978dd89837a369f59"
        },
        "date": 1786826064990,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.3943600782778884,
            "range": "± 1.84%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.721068493150774,
            "range": "± 2.15%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 10.26224266144805,
            "range": "± 1.71%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 166.55148727984576,
            "range": "± 0.80%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 29.47510763209413,
            "range": "± 1.72%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 31.118982387475548,
            "range": "± 7.47%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 52.905870841487705,
            "range": "± 1.03%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 16.58109589041114,
            "range": "± 2.16%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 90.7435616438352,
            "range": "± 1.40%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 59.722387475538646,
            "range": "± 1.47%",
            "unit": "μs",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 18632.327984344454,
            "range": "± 4.35%",
            "unit": "μs",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 600,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 2393,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 12476.307240704344,
            "range": "± 1.63%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 12574.630136986278,
            "range": "± 2.39%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.09269589041095733,
            "range": "± 1.74%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.09244794520547957,
            "range": "± 12.18%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.09000410958904188,
            "range": "± 3.44%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.09103013698630125,
            "range": "± 2.01%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.09193189823874744,
            "range": "± 8.27%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.09180410958903987,
            "range": "± 3.07%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.09097729941291641,
            "range": "± 2.89%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.6350152641878672,
            "range": "± 1.26%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.06006908023483339,
            "range": "± 5.09%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.13787866927592948,
            "range": "± 16.11%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.13904109589041086,
            "range": "± 7.38%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.13447945205479447,
            "range": "± 8.82%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.1334951076320939,
            "range": "± 2.64%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1164952,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.09437964774951045,
            "range": "± 12.55%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 308,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 318,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 307,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 1025.9356164383582,
            "range": "± 1.12%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1559.796868884555,
            "range": "± 2.10%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 72763.12328767101,
            "range": "± 0.94%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 29188.976516634284,
            "range": "± 1.19%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 25258.29158512722,
            "range": "± 0.33%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 30666.675146771136,
            "range": "± 1.47%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 834994.708414867,
            "range": "± 0.64%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5894,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 16921.847358121362,
            "range": "± 2.06%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 288847.0704500979,
            "range": "± 132.75%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 270744.06653620314,
            "range": "± 0.58%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 122177,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1615.0880626223154,
            "range": "± 2.47%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 3087.0939334637987,
            "range": "± 2.80%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 592481.5009784817,
            "range": "± 0.41%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1750.3835616438241,
            "range": "± 0.92%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 3154.8904109589366,
            "range": "± 1.03%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2213.191780821919,
            "range": "± 2.86%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 78468.84931506938,
            "range": "± 1.62%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 116019.69667318954,
            "range": "± 1.33%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 167020,
            "range": "± 197.22%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 93816.73776908062,
            "range": "± 0.96%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 102228.3767123298,
            "range": "± 0.23%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "committer": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "distinct": false,
          "id": "8dc44fd24a1e407ec0bf44a5f2cafb6f7ab5dc07",
          "message": "code-builder: Attribute builder",
          "timestamp": "2026-08-22T12:58:28+01:00",
          "tree_id": "630b46988247c65ee2f2d284f4c8109955d4614c",
          "url": "https://github.com/przepompownia/phpactor/commit/8dc44fd24a1e407ec0bf44a5f2cafb6f7ab5dc07"
        },
        "date": 1787447890436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.342181996086122,
            "range": "± 3.70%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.83282191780807,
            "range": "± 0.99%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 10.223301369863005,
            "range": "± 5.75%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 166.391575342466,
            "range": "± 1.04%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 29.46477495107641,
            "range": "± 1.48%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 31.13769080234823,
            "range": "± 2.12%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 52.9632485322894,
            "range": "± 1.12%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 16.45561643835613,
            "range": "± 8.97%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 91.2751467710373,
            "range": "± 11.39%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 59.66336594911947,
            "range": "± 1.22%",
            "unit": "μs",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 18476.40078277892,
            "range": "± 1.03%",
            "unit": "μs",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 569,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1473,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 12284.68297455956,
            "range": "± 1.26%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 12415.228962818,
            "range": "± 2.81%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.0911342465753412,
            "range": "± 2.20%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.09135166340508923,
            "range": "± 1.84%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.09210763209393338,
            "range": "± 1.99%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.09126555772994288,
            "range": "± 1.45%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.09092602739726023,
            "range": "± 2.07%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.092757142857143,
            "range": "± 5.62%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.09150508806262221,
            "range": "± 1.78%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.6530383561643789,
            "range": "± 3.19%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.05456712328767122,
            "range": "± 3.05%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.13867710371819952,
            "range": "± 7.88%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.13889432485322883,
            "range": "± 9.82%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.13528962818003898,
            "range": "± 10.87%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.13447945205479436,
            "range": "± 12.09%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1139560,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.08872602739726053,
            "range": "± 8.01%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 316,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 335,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 304,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 993.786301369874,
            "range": "± 0.38%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1453.6700587084074,
            "range": "± 1.19%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 71842.67514677059,
            "range": "± 0.55%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 28727.602739725644,
            "range": "± 0.20%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 25383.42465753438,
            "range": "± 0.35%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 29931.996086105886,
            "range": "± 0.68%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 822979.0058708377,
            "range": "± 0.50%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5774,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 16801.700587084524,
            "range": "± 0.75%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 281070.29549902154,
            "range": "± 133.74%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 271342.08610567386,
            "range": "± 0.67%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 123533,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1634.5166340509222,
            "range": "± 1.71%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 3059.4207436398674,
            "range": "± 1.28%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 590045.7925635991,
            "range": "± 0.94%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1722.356164383561,
            "range": "± 1.74%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 3116.6477495107274,
            "range": "± 0.97%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2227.152641878638,
            "range": "± 1.62%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 78533.67514676985,
            "range": "± 0.54%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 113524.7397260275,
            "range": "± 0.95%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 163437,
            "range": "± 198.45%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 93004.99315068673,
            "range": "± 0.96%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 101031.57045010028,
            "range": "± 0.46%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregmayes@gmail.com",
            "name": "Greg Mayes",
            "username": "GregMayes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "ec564f09bd36de643ce38d7ab442288fe8d44084",
          "message": "When a stub declares the same variable twice, it now correctly sticks to the first declaration's index (#3064)",
          "timestamp": "2026-08-26T10:52:09+01:00",
          "tree_id": "ab9bbac0541fb9b80289e3eddac341e3dbe63dff",
          "url": "https://github.com/przepompownia/phpactor/commit/ec564f09bd36de643ce38d7ab442288fe8d44084"
        },
        "date": 1788026626618,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.265602739726051,
            "range": "± 1.87%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.17959491193725,
            "range": "± 0.67%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 9.588455968688882,
            "range": "± 1.07%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 151.88101956947156,
            "range": "± 0.51%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 34.067906066536175,
            "range": "± 4.32%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 35.52594911937362,
            "range": "± 1.46%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 57.73953033268103,
            "range": "± 1.09%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 20.696790606653757,
            "range": "± 3.82%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 88.33131115459751,
            "range": "± 0.82%",
            "unit": "μs",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 56.47225048923702,
            "range": "± 1.14%",
            "unit": "μs",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 18350.789432485362,
            "range": "± 3.86%",
            "unit": "μs",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 570,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1470,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 11640.561643835672,
            "range": "± 0.88%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 11798.819960860867,
            "range": "± 0.59%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.0745931506849314,
            "range": "± 2.13%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.07482367906066528,
            "range": "± 1.76%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.0753164383561654,
            "range": "± 1.92%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.07414403131115455,
            "range": "± 1.16%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.07517181996085998,
            "range": "± 1.20%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.07425792563600664,
            "range": "± 1.90%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.07451135029354101,
            "range": "± 3.44%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.6000358121330687,
            "range": "± 2.26%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.05893346379647744,
            "range": "± 7.70%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.13682387475538152,
            "range": "± 9.25%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.13614481409001955,
            "range": "± 8.99%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.13217808219178076,
            "range": "± 5.46%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.13230136986301363,
            "range": "± 6.24%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1074760,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.09329158512720193,
            "range": "± 7.01%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 318,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 287,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 290,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 938.6434442270076,
            "range": "± 0.77%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1383.6455968689224,
            "range": "± 0.34%",
            "unit": "μs",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 60350.60665362007,
            "range": "± 0.59%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 26159.050880626164,
            "range": "± 0.66%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 23075.17808219194,
            "range": "± 0.86%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 28946.299412915814,
            "range": "± 0.46%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 730059.1800391319,
            "range": "± 0.43%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5561,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 14844.041095890498,
            "range": "± 0.68%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 248090.84148727983,
            "range": "± 136.34%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 239110.0743639928,
            "range": "± 0.44%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 107226,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1511.7338551859089,
            "range": "± 1.18%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 2891.812133072434,
            "range": "± 1.01%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 528690.7455968773,
            "range": "± 0.19%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1617.5479452054824,
            "range": "± 0.70%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 2920.0410958904004,
            "range": "± 1.57%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2077.540117416848,
            "range": "± 1.19%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 73711.28767123286,
            "range": "± 0.83%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 113162.52837573364,
            "range": "± 1.51%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 161679,
            "range": "± 194.56%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 92856.36790606636,
            "range": "± 0.41%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 100607.14285714281,
            "range": "± 0.75%",
            "unit": "μs",
            "extra": "4 iterations, 2 revs"
          }
        ]
      }
    ]
  }
}