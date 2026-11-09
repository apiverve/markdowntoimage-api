/// Response models for the Markdown to Image API.

/// API Response wrapper.
class MarkdowntoimageResponse {
  final String status;
  final dynamic error;
  final MarkdowntoimageData? data;

  /// Set only when the current plan locks one or more fields; null otherwise.
  final PremiumInfo? premium;

  MarkdowntoimageResponse({
    required this.status,
    this.error,
    this.data,
    this.premium,
  });

  factory MarkdowntoimageResponse.fromJson(Map<String, dynamic> json) => MarkdowntoimageResponse(
    status: json['status'] as String? ?? '',
    error: json['error'],
    data: json['data'] != null ? MarkdowntoimageData.fromJson(json['data']) : null,
    premium: json['premium'] != null ? PremiumInfo.fromJson(json['premium']) : null,
  );

  Map<String, dynamic> toJson() => {
    'status': status,
    if (error != null) 'error': error,
    if (data != null) 'data': data,
    if (premium != null) 'premium': premium!.toJson(),
  };
}

/// Describes fields the current plan does not unlock. Locked fields arrive as null
/// in [data], and [lockedFields] names them (nested ones use dot paths).
class PremiumInfo {
  final String? message;
  final String? upgradeUrl;
  final List<String>? lockedFields;

  PremiumInfo({this.message, this.upgradeUrl, this.lockedFields});

  factory PremiumInfo.fromJson(Map<String, dynamic> json) => PremiumInfo(
    message: json['message'] as String?,
    upgradeUrl: json['upgrade_url'] as String?,
    lockedFields: (json['locked_fields'] as List?)?.map((e) => e.toString()).toList(),
  );

  Map<String, dynamic> toJson() => {
    if (message != null) 'message': message,
    if (upgradeUrl != null) 'upgrade_url': upgradeUrl,
    if (lockedFields != null) 'locked_fields': lockedFields,
  };
}

/// Response data for the Markdown to Image API.

class MarkdowntoimageData {
  String? imageName;
  String? format;
  String? downloadURL;
  num? expires;
  num? markdownLength;
  num? htmlLength;
  MarkdowntoimageDataDimensions? dimensions;

  MarkdowntoimageData({
    this.imageName,
    this.format,
    this.downloadURL,
    this.expires,
    this.markdownLength,
    this.htmlLength,
    this.dimensions,
  });

  factory MarkdowntoimageData.fromJson(Map<String, dynamic> json) => MarkdowntoimageData(
      imageName: json['imageName'],
      format: json['format'],
      downloadURL: json['downloadURL'],
      expires: json['expires'],
      markdownLength: json['markdownLength'],
      htmlLength: json['htmlLength'],
      dimensions: json['dimensions'] != null ? MarkdowntoimageDataDimensions.fromJson(json['dimensions']) : null,
    );
}

class MarkdowntoimageDataDimensions {
  num? width;
  num? height;

  MarkdowntoimageDataDimensions({
    this.width,
    this.height,
  });

  factory MarkdowntoimageDataDimensions.fromJson(Map<String, dynamic> json) => MarkdowntoimageDataDimensions(
      width: json['width'],
      height: json['height'],
    );
}

class MarkdowntoimageRequest {
  String markdown;
  num? width;
  num? height;
  String? format;

  MarkdowntoimageRequest({
    required this.markdown,
    this.width,
    this.height,
    this.format,
  });

  Map<String, dynamic> toJson() => {
      'markdown': markdown,
      if (width != null) 'width': width,
      if (height != null) 'height': height,
      if (format != null) 'format': format,
    };
}
