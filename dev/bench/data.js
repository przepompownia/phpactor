window.BENCHMARK_DATA = {
  "lastUpdate": 1773100741925,
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
      }
    ]
  }
}